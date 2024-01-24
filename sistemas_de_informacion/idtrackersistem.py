import sqlite3  #BASE DE DATOS
import smtplib #LIBRERIA de MAIL
from email.mime.text import MIMEText 
from datetime import datetime


conn = sqlite3.connect('tintoreriacalasanz.db')
cursor = conn.cursor()


cursor.execute('''CREATE TABLE IF NOT EXISTS clothes
                  (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  full_name TEXT,
                  description TEXT,
                  status TEXT,
                  email TEXT,
                  phone_number TEXT,
                  address TEXT,
                  start_time TEXT,
                  end_time TEXT)''')

 
def agregar_prenda(full_name, description, email, phone_number, address):
    start_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S') #strftime --> string function time
    cursor.execute("INSERT INTO clothes (full_name, description, status, email, phone_number, address, start_time) VALUES (?, ?, 'Received', ?, ?, ?, ?)", (full_name, description, email, phone_number, address, start_time))
    conn.commit()
    print("Ropa agregada con exito.")


def actualizar_descripcion(clothes_id, description):
    cursor.execute("UPDATE clothes SET description=? WHERE id=?", (description, clothes_id))
    conn.commit()
    print("Descripcion actualizada con exito.")


def actualizar_estado(clothes_id, status):
    if status == "Terminado":
        end_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        cursor.execute("UPDATE clothes SET status=?, end_time=? WHERE id=?", (status, end_time, clothes_id))
    else:
        cursor.execute("UPDATE clothes SET status=? WHERE id=?", (status, clothes_id))
    conn.commit()
    print("Estado actualizado con exito.")

def actualizar_direccion(clothes_id, address):
    cursor.execute("UPDATE clothes SET address=? WHERE id=?", (address, clothes_id))
    conn.commit()
    print("Direccion actualizada con exito.")


def notificar_empleado():
    cursor.execute("SELECT * FROM clothes WHERE status='Terminado'")
    clothes = cursor.fetchall()

    if len(clothes) > 0:
        print("La siguiente ropa esta lista para ser entregada:")
        for cloth in clothes:
            print(f"ID: {cloth[0]} \nDescripcion: {cloth[2]} \nNombre Cliente: {cloth[1]} \nMail Cliente: {cloth[4]} \nTelefono Cliente: {cloth[5]} \nDireccion del Cliente: {cloth[6]}")
            calcular_duracion(cloth[0])
    else:
        print("No hay ropa lista para ser entregada.")


def check_status(clothes_id):
    cursor.execute("SELECT description, status FROM clothes WHERE id=?", (clothes_id,))
    cloth = cursor.fetchone()

    if cloth is not None:
        description, status = cloth
        print(f"ID de la Ropa: {clothes_id}")
        print(f"Descripcion: {description}")
        print(f"Estado: {status}")
    else:
        print(f"No se encontro ropa con el ID {clothes_id}.")   


def notificacion_email(email):
    #Email config
    sender_email = "tintoreriacalazanss@gmail.com"  
    sender_password = "********"  
    message = "Su ropa esta lista para ser entregada."


    msg = MIMEText(message)
    msg['Subject'] = "NOTIFICACION DE ENTREGA DE ROPA"
    msg['From'] = sender_email
    msg['To'] = email

    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.starttls()
            smtp.login(sender_email, sender_password)
            smtp.send_message(msg)
        print("Notificacion de Email mandada con exito.")
    except Exception as e:
        print(f"Error mandando notificacion por email: {str(e)}")


def calcular_duracion(clothes_id):
    cursor.execute("SELECT start_time, end_time FROM clothes WHERE id=?", (clothes_id,))
    start_time, end_time = cursor.fetchone()
    if start_time is not None and end_time is not None:
        start_datetime = datetime.strptime(start_time, '%Y-%m-%d %H:%M:%S')
        end_datetime = datetime.strptime(end_time, '%Y-%m-%d %H:%M:%S')
        duration = end_datetime - start_datetime
        print(f"Tiempo demorado para prenda con ID {clothes_id}: {duration}")
    else:
        print(f"No se calculo el tiempo de demora para la prenda con ID {clothes_id}.")

# NO USAR
def wipe_database():
    cursor.execute("DROP TABLE IF EXISTS clothes")
    conn.commit()
    print("Base de datos borrada con exito.")



# Ejemplos de uso
agregar_prenda("Nehuel Marcos" , "Pantalon", "ejempo@gmail.com", "123-456-789", "")
agregar_prenda("Marcela Nosecuanto" , "Saco" , "ejempo@gmail.com", "987-654-321", "")
agregar_prenda("Fulanito Richoti" , "Campera" , "ejemplo@gmail.com", "111-1111-111", "")
actualizar_descripcion (1, "Campera")
actualizar_direccion(3, "Lavalle 212")
actualizar_estado(1, "Lavando")
actualizar_estado(2, "Limpieza en seco")
actualizar_estado(3, "Terminado")
notificar_empleado()
check_status(2)
wipe_database()


#LINEAS DE CODIGO PARA USAR
# agregar_prenda("", "" , "", "", "")
# actualizar_descripcion (, "")
# agregar_direccion(, "")
# actualizar_estado(, "")
# notificar_empleado()
# check_status()
# wipe_database()

#NOTA: Usar "" cuenta como un ingreso de datos vacios   

#TPS ---> Control de operaciones
#ERP --> ayuda a agilizar la empresa
