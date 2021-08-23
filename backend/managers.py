from datetime import datetime

webhooks = [{"sensor": "abc", "ts": "2018-11-15T13:34:49Z", "in": 3, "out": 2, "reason": "dev meeting"},
            {"sensor": "abd", "ts": "2018-11-14T13:34:49Z", "in": 4, "out": 2, "reason": "python workshop"},
            {"sensor": "xyz", "ts": "2018-12-14T13:34:49Z", "in": 5, "out": 1, "reason": "iot meeting"},
            {"sensor": "vzu", "ts": "2018-11-16T13:34:49Z", "in": 4, "out": 1, "reason": "ia workshop"}]

sensors = [{"sensor": "abc", "room": 1},
           {"sensor": "abd", "room": 2},
           {"sensor": "xyz", "room": 3},
           {"sensor": "vzu", "room": 4}]

meetings = [{"ts": "2018-11-15T13:34:49Z", "reason": "dev meeting"},
            {"ts": "2018-11-14T13:34:49Z", "reason": "python workshop"},
            {"ts": "2018-12-14T13:34:49Z", "reason": "iot meeting"},
            {"ts": "2018-11-16T13:34:49Z", "reason": "ia workshop"}]


def format_date_time(ts: str) -> str:
    """[skip second and z from the ts]

    Args:
        ts ([str]): [the timestamp in format yyyy-mm-ddThh:mm:ssz]
    """

    return("".join(ts[:14]))


def get_inside(sensor: str, ts=None) -> int:
    """:number of people reported by sensor

    Args:
        sensor ([str]): [sensor name]
        ts ([str], optional): [at instant]. Defaults to None.

    Returns:
        [int]: [number of person inside reported by sensor ]
    """

    sensorhooks = [wh for wh in webhooks if wh["sensor"] == sensor]
    if ts:
        sensorhooks = [sh for sh in sensorhooks if format_date_time(sh["ts"]) == format_date_time(ts)]

    inside = sum([sh["in"]-sh["out"] for sh in sensorhooks])
    return inside


def get_sensors():
    return sensors


def add_sensor(sensor):
    sensors.append(sensor)


def get_webhook():
    return webhooks


def add_webhook(webhook:dict):
    webhooks.append(webhook)


def get_meetings():
    return meetings


def add_meeting(meeting:dict):
    print(meeting)
    meetings.append(meeting)
