# COMO PUBLICAR O SISTEMA NA NUVEM

## O que você vai ter no final

Um link permanente como:
```
https://SEU-USUARIO.github.io/opec-master/
```

Qualquer PC ou celular com internet acessa e instala como app nativo.

---

## Passo a passo (feito uma única vez)

### 1. Criar conta no GitHub
- Acesse https://github.com
- Clique em **Sign up** e crie uma conta gratuita

### 2. Criar repositório
- Clique no **+** (canto superior direito) → **New repository**
- Nome: `opec-master`
- Marque **Public**
- Clique **Create repository**

### 3. Enviar os arquivos
Na página do repositório criado, clique em **uploading an existing file** e envie:
- `OPEC.html`
- `MASTER.html`
- `index.html`
- `sw.js`
- `manifest-opec.json`
- `manifest-master.json`
- `icon-192.png`
- `icon-512.png`
- `icon-master-192.png`
- `icon-master-512.png`

Clique **Commit changes**

### 4. Ativar GitHub Pages
- Vá em **Settings** do repositório
- Menu lateral → **Pages**
- Em **Source**: selecione **GitHub Actions**
- Salve

O deploy roda automaticamente. Em 1-2 minutos o site estará no ar.

### 5. Seu link
```
https://SEU-USUARIO.github.io/opec-master/
```

---

## Como instalar como aplicativo (usuário final)

### Windows / Mac (Chrome ou Edge):
1. Abra o link no navegador
2. Clique em **OPEC** ou **MASTER**
3. Clique no botão **⬇ Instalar App** que aparece no topo
4. Confirme a instalação
5. Um ícone aparece na área de trabalho — clique para abrir sem navegador

### Android (Chrome):
1. Abra o link no Chrome
2. Menu (3 pontos) → **Adicionar à tela inicial**
3. Confirme — aparece ícone na tela inicial

### iPhone / iPad (Safari):
1. Abra o link no Safari
2. Botão compartilhar → **Adicionar à Tela de Início**
3. Confirme

---

## Atualizar o sistema

Quando houver uma nova versão do OPEC.html ou MASTER.html:
1. Vá no repositório do GitHub
2. Clique no arquivo → **Edit** (lápis) ou arraste o novo arquivo
3. Clique **Commit changes**
4. GitHub Pages publica automaticamente em 1-2 minutos
5. Na próxima vez que abrir o app, ele pergunta se deseja atualizar

---

## Sincronização

O banco de dados Firebase já está configurado:
- `https://sistemas-fb-default-rtdb.firebaseio.com/`

OPEC e MASTER sincronizam em tempo real pelo código de estação.
Funciona de qualquer lugar com internet, sem servidor próprio.
