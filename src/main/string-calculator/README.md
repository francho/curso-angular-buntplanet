# String Calculator

## Caso base

 - El método acepta 0, 1 ó 2 números y devuelve su suma.
 	- Ejemplo: "1,2" = 3
 - La suma de una cadena vacía es 0
 - La suma de una cadena con un solo número es el propio número

## Cambios

 - Se pueden sumar n números.
  - Ejemplo: "1,2,3" = 6
 - Se pueden separar con \n
  - Ejemplo: "1\n2\n3" = 6
 - Se puede definir un separador distinto usando el patrón: "//[delimitador]\n[números]"
 	- Ejemplo: "//;\n1;2" = 3
 - No se admiten números negativos. Si se pasa algún número negativo, la función falla e indica los números negativos en la traza de error.
 - No se admiten números mayores o iguales a 1000.
 	- Ejemplo: "1000,1" = 1
 - Se pueden definir separadores de más de un caracter de longitud.
 	- Ejemplo: "//[***]\n1***2***3" = 6
 - Se pueden definir varios separadores.
 	- Ejemplo: "//[*][%]\n1*2%3" = 6
