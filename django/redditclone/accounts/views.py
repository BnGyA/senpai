# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login


# Create your views here.
def signup(request):
    if request.method == "POST":
        if request.POST['password_1'] == request.POST['password_2']:
            try:
                user = User.objects.get(username = request.POST['username'])
                return render(request, 'accounts/signup.html', {'error': "Username already taken"})
            except User.DoesNotExist:
                user = User.objects.create_user(request.POST['username'], password=request.POST['password_1'])
                login(request, user)
                return render(request, 'accounts/signup.html')
        else:
            return render(request, 'accounts/signup.html', {'error' : "Passwords didnt match"})
    else:
        return render(request, 'accounts/signup.html')

def loginview(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return render(request, 'accounts/login.html', {'error': "Login successful"})
        else:
            return render(request, 'accounts/login.html', {'error': "Passwords & Username didnt match"})
    else:
        return render(request, 'accounts/login.html')