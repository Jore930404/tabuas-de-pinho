# Subir el proyecto a GitHub — paso a paso

El repositorio ya está inicializado en esta carpeta (`C:\Proyectos\Landing-Page\tabuas-de-pinho`). Esta guía sirve para publicarlo o para volver a subir cambios.

## Opción GitHub Desktop (sin consola)

1. Abrí **GitHub Desktop** e iniciá sesión con tu cuenta.
2. Si el repositorio no está en la lista: **File → Add Local Repository…** y elegí `C:\Proyectos\Landing-Page\tabuas-de-pinho`.
3. Si hay cambios sin commitear, escribí un resumen abajo a la izquierda y hacé **Commit to main**.
4. Arriba, **Publish repository** (la primera vez) o **Push origin** (las siguientes).
5. Completá nombre `tabuas-de-pinho`, descripción opcional y elegí si el repositorio es privado o público.
6. **Publish repository**.

### Cambios futuros

1. Modificás los archivos.
2. GitHub Desktop muestra los cambios: resumen y **Commit to main**.
3. **Push origin**.
4. Si aparece **Pull origin**, hacelo primero.

## Opción por consola

Requisitos: Git instalado ([git-scm.com/download/win](https://git-scm.com/download/win)).

```powershell
cd C:\Proyectos\Landing-Page\tabuas-de-pinho
git add .
git commit -m "Descripción del cambio"
git push
```

Si es la primera vez y no hay remoto:

```powershell
git remote add origin https://github.com/TU-USUARIO/tabuas-de-pinho.git
git push -u origin main
```

GitHub no acepta la contraseña de la cuenta: usá un token clásico con permiso `repo` (Settings → Developer settings → Personal access tokens → Tokens classic) o el inicio de sesión del navegador que ofrece Git Credential Manager.

## Verificar

En GitHub deben verse `src/`, `public/`, `scripts/`, `package.json`, `README.md`, etc. **No** deben verse `node_modules/` ni `dist/`.

## Ver el sitio

- **En esta computadora:** `npm run build` y después `npm run preview`, o abrí la URL de vista previa que te pasé.
- **Online:** subir a GitHub no publica el sitio por sí solo. Conectá el repositorio a Netlify o Cloudflare Pages con build `npm run build` y carpeta de publicación `dist`. GitHub Pages también sirve, pero requiere configurar `site`/`base` y un workflow.
