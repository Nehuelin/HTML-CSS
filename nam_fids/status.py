from flask import Flask, render_template
import random

app = Flask(__name__)

# Flight data with initial statuses
flights = {
    '123': {'destination': 'New York', 'status': 'On time'},
    '456': {'destination': 'Mexico City', 'status': 'Delayed'},
    '789': {'destination': 'Paris', 'status': 'Boarding'}
    # Add more flights and their initial statuses as needed
}

def update_flight_status():
    for flight_number in flights:
        # Simulating update from external data source
        statuses = ['On time', 'Delayed', 'Boarding', 'Cancelled']
        flights[flight_number]['status'] = random.choice(statuses)

@app.route('/')
def index():
    update_flight_status()  # Update flight statuses
    return render_template('test.html', flights=flights)

if __name__ == '__main__':
    app.run()