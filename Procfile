release: python3 backend/manage.py migrate
web: cd backend && gunicorn config.wsgi --log-file -