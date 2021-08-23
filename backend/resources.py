
from flask import request, jsonify
from flask_restful import Resource, reqparse
from managers import add_meeting, add_sensor, add_webhook, get_meetings, get_sensors, get_webhook, get_inside


class Webhook(Resource):
    def post(self):

        parser = reqparse.RequestParser()
        parser.add_argument('sensor', type=str)
        parser.add_argument('ts', type=str)
        parser.add_argument('in', type=int)
        parser.add_argument('out', type=int)

        args = parser.parse_args()

        sensor = args["sensor"]
        ts = args["ts"]
        req_in = args["in"]
        req_out = args["out"]
        res = {"sensor": sensor, "ts": ts, "in": req_in, "out": req_out}
        add_webhook(res)

        return res

    def get(self):
        webhooks = get_webhook()
        return jsonify(webhooks)


class Occupancy(Resource):
    def get(self):

        sensor = request.args.get("sensor", None)

        ts = request.args.get("atInstant", None)

        inside = get_inside(sensor, ts)

        return jsonify({"inside": inside})


class Sensors(Resource):

    def get(self):
        sensors = get_sensors()
        return jsonify(sensors)

    def post(self):

        parser = reqparse.RequestParser()
        parser.add_argument('sensor', type=str, required=True)
        parser.add_argument('room', type=str, required=True)
        args = parser.parse_args()

        sensor = args["sensor"]
        room = args["room"]

        res = {"room": room, "sensor": sensor}
        add_sensor(res)

        return res


class Meetings(Resource):
    def get(self):
        meetings = get_meetings()
        return jsonify(meetings)

    def post(self):
        parser = reqparse.RequestParser()

        parser.add_argument('ts', type=str)

        parser.add_argument('reason', type=str)

        args = parser.parse_args()

        reason = args["reason"]
        ts = args["ts"]

        res = {'ts': ts, 'reason': reason}
        add_meeting(res)
        return res
