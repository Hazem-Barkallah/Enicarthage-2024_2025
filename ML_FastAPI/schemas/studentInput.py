from pydantic import BaseModel

class StudentInput(BaseModel):
    moy_math_ing: float
    moy_analyse_s1: float
    moy_algo: float
    moy_prog: float
    moy_TIC: float
    moy_logique: float
    moy_GL: float
    moy_circuit: float
    moy_semi: float
    moy_eco_s1: float
    moy_ang_s1: float
    moy_fr_s1: float