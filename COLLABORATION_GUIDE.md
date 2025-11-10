# 📘 Panduan Kolaborasi Notifin Docs

## 🧭 Branch Structure
- master → stable release (lead only)
- dev → integration branch
- nama-branch-tim/... → branch kerja tim

## 💻 Buat branch baru
- git checkout -b (branch kamu)
- git push -u origin (branch kamu)

## 💻 SETUP PROJECT
- git clone https://github.com/TeguhEngineer/docs.notifin.git
- cd (nama-project)
- git fetch --all
- git checkout -b (branch kamu) origin/dev

## 🔄 Alur Kerja
1. git checkout (branch kamu)
2. Kerjakan fitur kamu
3. git add . && git commit -m "catatan perubahan"
4. git push origin (branch kamu)
5. Buat Pull Request → target: dev

## 🔄 Singkronsasi setiap update branch dev
# Berada di branch masing-masing
- git checkout (branch masing masing)

# Tarik update terbaru dari dev
- git fetch origin
- git merge origin/dev
- (selesaikan conflict jika ada)

## 🚫 Jangan
- Push langsung ke main atau dev
- Merge tanpa approval

## ✅ Do
- Selalu pull dari dev sebelum mulai kerja


