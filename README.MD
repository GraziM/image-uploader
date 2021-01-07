# IMAGE UPLOADER feito com Djando e React

Sistema simples upload de imagens. Projeto desenvolvido com o intuito de aprender mais sobre o framework flask.

## Para rodar o sistema

Windows:

    python -m venv venv
    venv\Scripts\activate
	pip install -r requirements.txt
	set DEBUG="True"
    set SECRET_KEY="SECRET_KEY"
	cd frontend
    npm install
    npm run start
    cd ..
    cd backend
    python manage.py migrate
    python manage.py makemigrations
	python manage.py runserver
	
Linux:

	python3 -m venv venv
    source venv/bin/activate
	pip install -r requirements.txt
	export DEBUG="True"
    export SECRET_KEY="SECRET_KEY"
	cd frontend
    npm install
    npm run start
    cd ..
    cd backend
    python manage.py migrate
    python manage.py makemigrations
	python manage.py runserver