from app import app
from controllers import qplaces, auth


app.register_blueprint(qplaces.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
