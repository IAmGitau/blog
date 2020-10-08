---
title: My blog  application
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsum, nulla! At commodi, delectus deserunt dolore dolorem ea et inventore itaque laborum nisi, reprehenderit voluptates.
tags:
    - Go
    - node
    - css
    - html
---

> I have explicitly changed to developing my applications using Typescript also I changed my javascript package manage to yarn for security reasons.

<img src="https://images.unsplash.com/photo-1598624211345-d321dda059b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Car" class="w-full" />

## 🚀 My blog  application

This is my personal blog application. I will be writing about the web, updates on frameworks I work with, creating of application either to solve a common problem or a problem I faced. I aim to improve on my developer skills and hopefully help others by providing better solutions to problems.

## 🚧 Build Setup
 
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## 💥 Python

```python
class User(Users):
    name = models.Charfield(max_length=20, blank=True, null=False)
    email = models.Charfield(max_length=20, blank=True, null=False)
    password = models.Charfield(max_length=20, blank=True, null=False)
    
    def __str__(self):
        return self.name
    
    class Meta:
            verbose_plural_names = "Users"

class Subscriber(User):
    name = models.ForeignKey(User, on_delete=model.Cascade, default=1)
    email = models.Charfield(max_length=20, blank=True, null=False)
    password = models.Charfield(max_length=20, blank=True, null=False)
    
    def __str__(self):
        return self.name

    class Meta:
        verborse_plural_names = "Subscribers"

```

## 🍭 Javascript

```javascript
class User extends Users{
    constructor() {
        this.name = name
        this.age = age
        this.word = word
    }
    
    speak(word) {
        console.log("The word said is ", word);
        return this.word;
    }
}
```

## 🪀 About me

- Joseph Gitau
- Full stack developer
- [Github](https://github.com/IAmGitau)
