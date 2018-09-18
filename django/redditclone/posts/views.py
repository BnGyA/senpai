# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from . import models
from django.contrib.auth.models import User
# Create your views here.

@login_required
def create(request):
    if request.method == 'POST':
        if request.POST['title'] and request.POST['url']:
            post = models.Posts()
            post.title = request.POST['title']
            if request.POST['url'].startswith('http://') or request.POST['url'].startswith('https://'):
                post.url = request.POST['url']
            else:
                post.url = 'http://' + request.POST['url']
            post.pub_date = timezone.datetime.now()
            post.author = request.user
            post.save()
            return redirect('home')
        else:
            return render(request, 'posts/create.html', {'error': 'Title or url invalid'})
    else:
        return render(request, 'posts/create.html')

def home(request):
    post = models.Posts.objects.order_by('-votes_total')
    return render(request, 'posts/home.html', {'post': post})


def upvote(request, pk):
    if request.method == 'POST':
        post = models.Posts.objects.get(pk=pk)
        post.votes_total += 1
        post.save()
        return redirect('home')
    else:
        return redirect('home')


def downvote(request, pk):
    if request.method == 'POST':
        post = models.Posts.objects.get(pk=pk)
        post.votes_total -= 1
        post.save()
        return redirect('home')
    else:
        return redirect('home')

def userposts(request, fk):
    post = models.Posts.objects.filter(author__id=fk).order_by('-votes_total')
    author = User.objects.get(pk = fk)
    return render(request, 'posts/user.html', {'post': post, 'author': author})