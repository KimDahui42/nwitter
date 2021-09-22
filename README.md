#Nwitter
Twitter (mini)clone with React and Firebase
Still confusing how to use git
# nwitter log
## 09.15 기본 설정
Git default branch가 master에서 main으로 변경됨 main과 compare 해야 push 되도록 설정되어있어 브랜치를 master에서 main으로 변경해주어야함
```
git checkout master
git brach main master -f
git checkout main
git push origin main -f
```

## 09.17-18 firebase
firebase 기본 셋

## 09.20 
오류 메세지
```
./src/index.js
Attempted import error: './firebase' does not contain a default export (imported as 'firebase').
```
export가 설정되지 않았다는 설명에 firebase.js 파일 하단에 `export default app;` 추가로 해결

