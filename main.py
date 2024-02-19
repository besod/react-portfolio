from fastapi import FastAPI, templating_engine, Depends, Request,Union
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

@app.get("/")
def read_root
templates = Jinja2Templates(directory="templates")  # Replace with your template directory

app.mount("/static", StaticFiles(directory="static"), name="static")  # Optional for static files

async def get_template(name: str, request: Request = Depends(Request)):
    return templates.Template(name=name, context={"request": request})

# app.include_router(FastAPIRouter(templates=get_template), prefix="")  # Replace with your router

#About me content
about_me = """
I am a pasisionate developer with X years of experience. My skills include ...."""


projects = [
    {"title": "Project 1", "description": "Description of project 1"},
    {"title": "Project 2", "description": "Description of project 2"},
    {"title": "Project 3", "description": "Description of project 3"},
]

sorical_media_l_links = {
    "Twitter": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "Instagram": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "Facebook": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "LinkedIn": "XXXXXXXX",
    "GitHub": "XXXXXXXX",
}