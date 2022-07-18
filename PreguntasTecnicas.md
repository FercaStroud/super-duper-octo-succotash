# Información de Contacto
* Email: info@ferca.dev
* Email: +52 8713 35 13 43
<p align="center">
  <img width="200" src="src/assets/logo.webp" />
</p>

# Sobre el Proyecto
Normalmente estructuro de esta manera, intenté usar lo más posible de herramientas.

# Preguntas Técnicas
* **¿Has aplicado los principios SOLID?**
   
  Sí, en la mayoría de los proyectos personales intento tener mi código lo más escalable y ordenado posible.


* **¿Cuánto tiempo has estado pensando y escribiendo tests del código?** 
    
  Para éste en particular no he escrito pruebas cómo tal. Tardé al rededor de unas 6 horas en mis tiempos libres.


* **Si hubieras tenido mucho más tiempo... ¿qué habrías añadido?** 
    
    Validadores, los empecé pero no los terminé :p, un poco de animaciónes para hacerla más dinámica.


* **Si no has realizado tests, ¿qué herramientas habrías utilizado para llevarlos a cabo?**

    No tengo mucha experiencia en test unitarios si es a lo que se refiere, pero conozco algunas herramientas, nada que la documentación no arregle :p.    


* **¿Cómo mejorarías la API que has usado?**

    No tiene paginadores como tal, yo le agregaría uno.


* **¿Crees que esta API soporta peticiones CORS? ¿Cómo has llegado a esa conclusión?**

    Sí las soporta, las tiene configuradas, de hecho agregué a la petición de axios los parámetros. 
    Llegué a esa conclusión porque me pidió esa configuración al hacer las peticiones.



* **¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna vez has tenido que hacerlo?**

    Agrego normalmente un log, he tenido que hacerlo para rastrear errores. El rendimiento como tal, uso las mismas herramientas del explorador unido al doc que genero.


* **Descríbete a ti mismo en formato JSON.**
```
    [
        {
            name: {
                first_name: 'Fernando',
                surname: 'Cárdenas',
                second_surname: 'González',
                alias: 'Ferca',
            },
            hobbies: ['programing',movies','music','videogames']
            skills: {
                php: {
                    level: 'Advanced',
                    libs: [
                        'laravel', 
                        'laravel-sanctum',
                        'laravel-vue-i18n-generator',
                        'paypal',
                        'BBVA',
                        'mercado-pago',
                    ] 
                },
                js:{
                    typescript:{
                        level: 'Advanced',
                        libs: [] 
                    },
                    vue: {
                        level: 'Advanced',
                        libs: [
                            'vuex', 
                            'laravel-echo',
                            'laravel-mix',
                            'router',
                            'auth',
                        ] 
                    },
                },
                css: {
                    level: 'Advanced',
                    libs: ['sass','bootstrap','framework7','vuetyfy','and_more'] 
                },
                pug: {
                    level: 'Advanced',
                    libs: [] 
                },
            }
        }
    ]
```