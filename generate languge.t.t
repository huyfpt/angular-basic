# Cryosoft angular translation
## Install ngx-translate

~~~
npm install @ngx-translate/core --save
~~~
## Install ngx-translate-extract

~~~
npm install @biesbjerg/ngx-translate-extract --save-dev
~~~
### Add an extract script to your project's package.json:

~~~
"scripts": {
  "extract": "ngx-translate-extract --input ./src --output ./src/assets/i18n/*.json --clean --sort --format namespaced-json"
}
~~~
## Run and genrate json file

~~~
npm run extract
~~~
## Reference

* https://www.npmjs.com/package/@biesbjerg/ngx-translate-extract

 
