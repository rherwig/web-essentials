# Web Essentials
This repository is a collection of patterns and examples for modern-day 
frontend web applications. It is a constant work-in-progress and will be expanded upon,
when best-practices arise or change.


## Purpose
Rather than showcasing one project, this repository is designed for demonstrating
individual bits of code that can be useful in modern-day web applications.

Those bits (referred to as *essences*) of code then serve as building blocks for recurring tasks in a web
application, like loading fonts, registering a service-worker and more.

>
> **Please note**
>
> This collection has just started and should be considered no more than the
> authors personal collection of frontend bits at this point in time.
> It is by no means a complete collection and is in parts biased on the author's
> experience, personal preference or preferred development environment.
>
> Feel free to use and adjust it to your liking.


## Usage
Each *essence* is showcased in its separate own project with a rudimentary build
engine setup.

In order to run it, the following general steps are required (unless stated otherwise
in the respective README, which each *essence* will contain):

1. Change into the desired directory `cd essences/<name>`
2. Install the dependencies via `npm i`
3. Start the development server via `npm start`
4. Navigate to `localhost:3000` in your web browser

>
> **Important**
> 
> The scope of each *essence* is usually described within its README.
> It does potentially not showcase best-practices that exceed this scope.
> 
> This means: An *essence* showing how to implement a service-worker might not
> follow best-practices on how to lay out an HTML index document. If there is
> no *essence* for those out-of-scope parts, you might need to refer to 
> external resources.


## Essences
* [Font Loading](essences/font-loading)

## License
MIT
