const LinksSocialMedia = {
 github:"MarceloWesley",
 youtube: "channel/UC2Kp7g_97741wsczqQMSnzw",
 instagram: "marcelo_olyscott",
 facebook: "profile.php?id=100004307259256",
 twitter: "MarceloOliscott"
}

function ChangeSocialMediaLinks(){

for(let li of SocialLinks.children){
  /*nesta função, criamos um objeto chamado LinksSocialMedia que contem a chave que é a rede social, e contem o nome do usuario de cada rede, que é o value, feito isso, criamos uma função que para cada li vá para os filhos de SocialLinks (variavel de uma tag Ul no html) ou seja os filhos de li sao os a, criamos uma variavle "social" para receber a classe que eu coloquei em cada rede social, essa classe contem o proprio nome de cada rede, ou seja, o social vai receber rede social por rede social, após isso criamos um comando li.children[0].href, que faz com que falamos diretamente com o filho da li na primeira posição e falamos com o href, e mudamos o link que estava lá por um novo, usando aspas para podermos colocar variaveis na string, a variavel "social" vai receber as redes sociais e o objeto "linkssocialmedia[social] pois estamos falando com uma chave especifica dentro desse objeto,, e o social contem o nome das chaves e cada chave contem seu valor, para podermos falar com esse valor nessa forma de string, é so coloca-lo em colchetes. */
const social = li.getAttribute('class')
li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
//alert(li.children[0]f).hre
}

}

ChangeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //FETCH

/*o fetch irá pegar a resposta da url e pra gente pegar essa resposta nos precisamos usar as promises que são esse .then, se o fetch funcionar de boas, a resposta irá entratr no then. then= faça, se deu certo faço isso aqui. basicamente é isso q está escrito abaixo.*/

//ARROW FUNCTIONS

/*Aqui estamos usando uma arrow function, que nada mais é que uma forma contraida de função, response é a variavel ou o parametro que está recebendo a resposta do then, e para especificarmos que é uma resposta em json temos que por a variavel.json(), como é somente 1 parametro, não precisamos de chaves. se quisermos passar mais de um argumento ou parametro, temos que por ela entre parenteses por uma virgula e escrever o proximo parametro. *PODEMOS TER VARIOS THEN, UM PEGANDO A RESPOSTA DO OUTRO*. temos que por outro then pois quando o dado recebido virou json ele virou outra resposta que precisa ser pega. */
  fetch(url).then(response => response.json())
  .then(data => {
    UserName.textContent = data.name
    UserBio.textContent = data.bio
    UserLink.href.textContent = data.html_url
    UserPhoto.src.textContent = avatar_url
    UserLogin.textContent = data.login
  })
}

getGitHubProfileInfos()

