
# HTML

**Lenguaje de Marcas de Hipertexto (HyperText Markup Language)**

<p class="justificado"> <span class="negrita">HTML</span> se utiliza para <span class="negrita"> estructurar</span> , darle <span class="negrita"> formato </span> y escribir el <span class="negrita">contenido</span> de una página web, mediante <span class="negrita"> etiquetas</span>, las cuales les permiten a los navegadores interpretar los elementos de una página web.</p>

## Estructura base de un documento HTML

<EstructuraHTML/>

## Sintaxis de un Elemento HTML

 ![Sintaxis de una Etiqueta HTML](/Sintaxis-HTML.png) 

<p class="justificado">Un <span class="negrita">elemento</span> es todo, desde la etiqueta de apertura hasta la etiqueta de cierre, los elementos que no tienen contenido ni etiqueta de cierre se llaman <span class="negrita"> elementos vacíos</span>.</p>

:::tip Anidamiento
Los elementos se pueden <span class="negrita">anidar</span>, es decir poner uno dentro del otro.
:::

<p class="justificado">Los <span class="negrita">atributos</span> proporcionan información adicional sobre los elementos, estos siempre se incluyen en la etiqueta de apertura, nunca en la etiqueta de cierre.</p>

:::tip Atributo class
El atributo <span class="negrita">class</span> permite darle al elemento un nombre identificativo, que se puede utilizar luego para apuntarle al elemento información de estilo y demás cosas.
:::

## HEAD

<ul>
<li> <span class="negrita">Etiqueta title:</span> Define el título del documento que se muestra en la pestaña de una página.</li>

```html 
<title></title>
```
<li> <span class="negrita">Etiqueta link:</span> Especifica la relación entre el documento actual y un recurso externo. Este elemento es más frecuentemente usado para enlazar hojas de estilos.</li>

```html
<link rel="icon" href="/assets/favicon/icono.png">
```
:::tip Favicon
Es la imagen que va en la pestaña del navegador.
:::

:::tip Atributo rel
El atributo <span class="negrita">rel</span> indica la relación del documento enlazado con el actual.
:::

:::tip Atributo href
El atributo <span class="negrita">href</span> especifica la URL del recurso enlazado.
:::

<li> <span class="negrita">Etiqueta style:</span> Es el elemento encargado de indicar la información de estilo.</li>

```html
<style></style>
```
<li> <span class="negrita">Etiqueta meta:</span> Sirve para aportar información sobre el documento.</li>

```html
<meta charset="utf-8">
```
:::tip charset="utf-8"
Este atributo establece el juego de caracteres que tu documento usará en utf-8, que incluye casi todos los caracteres y simbolos de todos los idiomas humanos.
:::

<li> <span class="negrita">Etiqueta script:</span> Se utiliza para incrustar código o datos ejecutables; generalmente se usa para incrustar o hacer referencia al código JavaScript.</li>

```html
<script></script>
```

<li> <span class="negrita">Etiqueta noscript:</span> Aporta contenidos alternativos al elemento script, las aplicaciones de usuario que no soporten scripts deben mostrar en su lugar el contenido de este elemento.</li>

```html
<noscript></noscript>
```
</ul>

## BODY

 
