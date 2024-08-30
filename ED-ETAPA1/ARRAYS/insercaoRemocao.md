## **Adicionar e remover elementos de um array**

### INSERÇÃO:

- **push()**: Adiciona elementos ao *final* do array.
    
    ```js
    let numeros = [1,2,3,4]
    numeros.push("15");
    ```
    
- **unshift()**: Adiciona elementos ao *início* do array.
    
    ```js
    numeros.unshift("16");
    ```
    

### REMOÇÃO:

- **pop()**: Remove o último elemento do array.
    
    ```js
    let ultimoNumero = numeros.pop();
    ```
    
- **shift()**: Remove o primeiro elemento do array.
    
    ```js
    let primeiroNumero = numeros.shift();
    ```
    
- **delete**: Remove um elemento pelo índice sem alterar o tamanho do array, deixando uma lacuna.
    ```js
    delete numeros[1];
    ```