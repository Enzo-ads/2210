const lista = document.getElementById("lista")

const alunos = ["Afonso", "Maria", "Rafaela"]

for (const aluno of alunos){
    const p = document.createElement("p")
    p.textContent = aluno
    lista.appendChild(p)
}