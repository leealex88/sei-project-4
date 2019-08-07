import os

db_uri = os.getenv('DATABASE_URI', 'postgres://localhost:5432/qplaces')
secret = os.getenv('SECRET', 'my secret')
