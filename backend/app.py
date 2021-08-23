

from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from resources import Webhook,  Occupancy, Sensors,Meetings

app = Flask(__name__)
CORS(app)
api = Api(app)


api.add_resource(Webhook, '/api/webhook')  # Route_1
api.add_resource(Occupancy, '/api/occupancy')  # Route_2
api.add_resource(Sensors, '/api/sensors')  # Route_3
api.add_resource(Meetings, '/api/meetings')  # Route_4


if __name__ == '__main__':
    app.run(port=5002, debug=True, use_reloader=False)
