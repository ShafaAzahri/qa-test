import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    http_req_failed: ['rate<0.01'],    // failure rate must be less than 1%
  },
};

export default function () {
  const res = http.get('http://localhost:3000/');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'has correct welcome message': (r) => r.json().message === 'Welcome to the QA Testing App!',
  });
  sleep(1);
}
