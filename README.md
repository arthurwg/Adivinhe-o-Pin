# Adivinhe o PIN

Jogo de adivinhar o PIN.

![Aplicação rodando](https://i.imgur.com/w1L1dPf.png) 

***

## Sobre o projeto

Se trata de um sistema ou jogo em que o usuário deve adivinhar um pin de 4 digitos gerado aleatoriamente. Ao dar um palpite, o sistema informará o usuário se o valor do seu palpite está abaixo, muito abaixo, acima ou muito acima do PIN correto. Ao acertar o valor correto o usuário será notificado e um novo PIN aleatório será gerado. 

**Tecnologias Utilizadas**:

1. **HTML**
    - Apenas para estruturação.
2. **CSS**
    - Estilização básica.
3. **Javascript**
    - Foi utilizado Javascript para gerar o PIN randômico, validar as entradas do usuário e imprimir as dicas na tela de acordo com o palpite do usuário.
4. **Bootstrap**
    - Foi utilizado apenas para utilizar o template dos inputs e posicionar algumas colunas.

***

## Dificuldades

Por se tratar de um projeto pequeno, não tive grandes dificuldades, mas certamente a parte mais complexa do projeto está na geração de um número randômico com 4 dígitos, incluindo números menores do que 1000. Como a função nativa do JavaScript Math.random() gera um número em um intervalo especificado pelo desenvolvedor, não basta apenas especificar que o número pode estar entre 0 e 10000, pois dessa forma ele poderia gerar números de 3 dígitos (999 para baixo). Para essa situação, tive que fazer um if para checar o número randômico gerado e verificar se a sua quantidade de dígitos era inferior a 4 e se sim, concatenar um 0 no início.



***

## Como utilizar 


### Pré-requisitos
- Navegador da web moderno

### Passos

1. **Clone o Repositório:**
    ```bash
     git clone -b arthur-garcia https://github.com/Compass-pb-aws-2024-IFSUL-UFERSA/sprint-1-pb-aws-ifsul-ufersa.git
    ```
    ou

    Faça o download do arquivo ZIP e descompacte-o.

2. **Abra o Projeto:**
    - Navegue até o diretório do projeto:
        ```bash
        cd seu-projeto
        ```

3. **Execute no Navegador:**
    - Abra o arquivo `index.html` em qualquer navegador moderno.

Isso é tudo! Agora você deve ver a aplicação em ação no seu navegador.


