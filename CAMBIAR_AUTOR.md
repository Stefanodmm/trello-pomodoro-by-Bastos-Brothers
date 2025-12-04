# Instrucciones para Cambiar el Autor de los Commits

Para eliminar a "Intelligy Arts" como contribuyente, necesitas reescribir el historial de Git. 

## Opción 1: Usar Git Bash (Recomendado)

1. Abre **Git Bash** (no PowerShell)
2. Navega al directorio del proyecto:
   ```bash
   cd /c/Users/SDM/Documents/SuperTrelloPomodoro
   ```
3. Ejecuta este comando:
   ```bash
   git filter-branch -f --env-filter '
   if [ "$GIT_COMMITTER_EMAIL" = "intelligyarts@gmail.com" ]
   then
       export GIT_COMMITTER_NAME="Stefanodmm"
       export GIT_COMMITTER_EMAIL="mainpro777@gmail.com"
   fi
   if [ "$GIT_AUTHOR_EMAIL" = "intelligyarts@gmail.com" ]
   then
       export GIT_AUTHOR_NAME="Stefanodmm"
       export GIT_AUTHOR_EMAIL="mainpro777@gmail.com"
   fi
   ' --tag-name-filter cat -- --branches --tags
   ```

4. Limpia las referencias:
   ```bash
   git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   ```

5. Verifica que funcionó:
   ```bash
   git log --all --format="%an <%ae>" | sort -u
   ```
   Solo debería aparecer "Stefanodmm <mainpro777@gmail.com>"

6. **IMPORTANTE**: Haz force push al repositorio remoto:
   ```bash
   git push origin --force --all
   git push origin --force --tags
   ```

## Opción 2: Usar GitHub Web Interface

Si no puedes usar Git Bash, puedes:
1. Crear un nuevo repositorio limpio
2. Copiar todos los archivos
3. Hacer un commit inicial con tu nombre
4. Hacer push al nuevo repositorio

## ⚠️ Advertencia

- Esto reescribirá el historial de Git
- Necesitarás hacer **force push** (esto sobrescribirá el historial remoto)
- Si otros tienen el repositorio clonado, necesitarán hacer `git fetch` y `git reset --hard origin/main`

