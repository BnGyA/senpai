from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def translate(request):
    toTranslate = request.GET['to_translate'].lower()


    translation = ''
    for word in toTranslate.split():
        # check if first letter is a vowel
        if word[0] in ['a', 'e', 'i', 'o', 'u']:
            translation += word
            translation += 'yay '
        # else it's a consonant
        else:
            # take the rest of the word till the end
            translation += word[1:]
            # take the first letter
            translation += word[0]
            # add the ay at the end
            translation += 'ay '
    #return HttpResponse(translation)
    return render(request, 'translate.html', {'original': toTranslate, 'translation': translation})