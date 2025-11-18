# Semana 1

Checklist diária e metas.

# 12/11/2025
- Leitura do Handbook de Typescript até aqui: https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler

# 16/11/2025
- Leitura do Handbook de Typescript até aqui: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- Prática de exemplos da documentação

# 📅 Week 01 — Day 02
**Status:** ✔ Concluído  
**Duração:** ~2h  
**Foco:** TypeScript — Narrowing (nível intermediário)

---

## 📘 Estudo realizado

### ✔ Lido no Handbook do TypeScript:
- Narrowing  
  https://www.typescriptlang.org/docs/handbook/2/narrowing.html

Compreendidos os principais mecanismos:
- `typeof` narrowing  
- `truthiness` narrowing  
- Equality narrowing  
- In-operator narrowing  
- `Array.isArray()` narrowing  
- Discriminated unions  
- Exhaustiveness checking (`never`)  

---

## 🧪 Prática realizada

Criei vários exercícios de narrowings para reforçar:

- diferenciação entre tipos primitivos  
- manipulação segura de union types  
- verificação de propriedades com `"key" in object"`  
- uso de `Array.isArray` para validar arrays  
- estruturas condicionais seguras com TypeScript

### 📌 Exercício final — `processInput()`  
**Versão implementada hoje:**

```ts
function processInput(input: string | number | string[] | null) {
    if (input && typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return input * 2;
    } else if (Array.isArray(input)) {
        return `Array with ${input.length} items`;
    } else {
        return "No value";
    }
}

# 📅 Week 01 — Day 03
**Status:** ✔ Concluído  
**Duração:** ~2h  
**Foco:** TypeScript — Generic Functions e Overloads (nível intermediário)

#### 🔹 **More on Functions** (capítulo completo)
https://www.typescriptlang.org/docs/handbook/2/functions.html  

Sessões estudadas:

- function types  
- optional/default parameters  
- unknown in function arguments  
- union return types  
- narrowing dentro de funções  
- funções como valores (callback patterns)  
- **introdução a Generic Functions** (até o fim da seção)
- função como tipo genérico  
- constraints com `extends`

---

## 🧪 Prática realizada

### ✔ Revisão prática de narrowings
Implementei e revisei:

- narrowing com typeof  
- narrowing com array  
- narrowing com unions complexos  
- verificação segura com `"key" in obj"`  
- fluxo condicional seguro com TS

### ✔ Exercício final do dia — `processInput()`

```ts
function processInput(input: string | number | string[] | null) {
    if (input && typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return input * 2;
    } else if (Array.isArray(input)) {
        return `Array with ${input.length} items`;
    } else {
        return "No value";
    }
}