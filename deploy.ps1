$IP = "62.238.28.206"
$DEST = "/root/link_bio"
$FILE_NAME = "link_bio.tar.gz"

Write-Host "--- Iniciando Deploy do Link na Bio ---"

# 1. Build do Projeto
Write-Host "Realizando build..."
npm run build

# 2. Compactando pasta dist
Write-Host "Compactando arquivos estáticos..."
if (Test-Path $FILE_NAME) { Remove-Item $FILE_NAME }
tar -czf $FILE_NAME -C dist .

# 3. Enviar para VPS
Write-Host "Enviando para o servidor ($IP)..."
ssh root@$IP "mkdir -p $DEST"
scp $FILE_NAME "root@${IP}:${DEST}/"

# 4. Comandos Remotos na VPS
Write-Host "Iniciando PM2 no servidor..."
$remoteCmd = "cd $DEST; tar -xzf $FILE_NAME; pm2 delete nexus-link-bio 2>/dev/null; pm2 serve $DEST 5000 --name nexus-link-bio --spa; pm2 save"
ssh root@$IP $remoteCmd

Write-Host "--- Deploy Finalizado ---"
Write-Host "O site está rodando na porta 5000 da VPS."
