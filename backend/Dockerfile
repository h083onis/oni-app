FROM python:3.10

RUN python -m pip install --upgrade pip

ENV PYTHONUNBUFFERD 1

WORKDIR /backend

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .