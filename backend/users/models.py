from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    PROFILES_CHOICE = (
        ('Especialista', 'Profundidade de conhecimento em um campo específico.'),
        ('Inovador', 'Busca por ideias novas, disruptivas.'),
        ('Colaborador', 'Prefere compartilhar e discutir ideias.'),
        ('Comunicador', 'Focado em artigos que podem ser comunicados ao público.'),
        ('Analista', 'Preocupado com a qualidade dos dados e a metodologia.'),
    )
    profile = models.CharField(max_length=100, null=False, choices=PROFILES_CHOICE, verbose_name='profile')
    research_title = models.CharField(max_length=100, null=False, verbose_name='research title')
    research_description = models.TextField(max_length=500, null=False, verbose_name='research_description')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='profiles')

    def __str__(self):
        return self.profile
