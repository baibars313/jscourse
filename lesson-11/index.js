let patname = window.location.pathname

let url = [{ id: 'link-2', path: 'index' }, { id: 'link-1', path: 'ined' }]

for (let index = 0; index < url.length; index++) {
    const element = url[index];
    if (patname.includes(element.path)) {
        document.getElementById(element.id).setAttribute('class', 'nav-link active');
    }

}