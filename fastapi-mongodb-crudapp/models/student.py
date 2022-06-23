#import statement
from pydantic import BaseModel

class Student(BaseModel):
    student_name: str
    student_email: str
    student_phone: str