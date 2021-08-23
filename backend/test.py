
import unittest


from app import app


class WebhookTest(unittest.TestCase):
    def test_sucessfull_post(self):
        payload = {
            "sensor": "testingsensor",
            "ts": "2018-11-14T13:34:49Z",
            "in": 3,
            "out": 2
        }

        res = app.test_client().post('/api/webhook', json=payload)

        self.assertEqual(res.status_code, 200)

    def test_sucessfull_get(self):
        res = app.test_client().post('/api/webhook')
        self.assertEqual(res.status_code, 200)


class OccupancyTest(unittest.TestCase):
    def test_succesful_occupancy(self):
        payload = {
            "sensor": "testingsensor",
            "ts": "2018-11-14T13:34:49Z",
            "in": 3,
            "out": 2
        }
        # post data to webhook
        res = app.test_client().post('/api/webhook', json=payload)

        self.assertEqual(res.status_code, 200)

        my_params = {"sensor": "testingsensor",
                     "ts": "2018-11-14T13:34:49Z"}

        # get request the data with paramaters from posted data
        resp = app.test_client().get('/api/occupancy', query_string=my_params)

        self.assertEqual(res.status_code, 200)

        occupancy = resp.json

        # assert occupancy is equal to 1 (3-2)
        self.assertEqual(occupancy["inside"], 1)


class meetingsTest(unittest.TestCase):
    def test_sucessfull_post(self):
        payload = {
            "reason": "testing meeting",
            "ts": "2018-11-14T13:34:49Z"}
        res = app.test_client().post('/api/meetings', json=payload)
        self.assertEqual(res.status_code, 200)

    def test_successfull_get(self):
        res = app.test_client().get('/api/meetings')
        self.assertEqual(res.status_code, 200)


class sensorTest(unittest.TestCase):
    def test_sucessfull_post(self):
        payload = {
            "sensor": "testingsensor",
            "room": "5"}
        res = app.test_client().post('/api/sensors', json=payload)
        self.assertEqual(res.status_code, 200)

    def test_successfull_get(self):
        res = app.test_client().get('/api/sensors')
        self.assertEqual(res.status_code, 200)


if __name__ == "__main__":
    unittest.main()
