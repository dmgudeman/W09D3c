const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {

  options.headers = {
    ...options.headers
  };
  console.log(options)
  return await fetch(url, options);
}


export const followUser = (id) =>  { customFetch(`/users/${id}/follow`, {headers:{ method: 'POST'}})}
export const unFollowUser = (id) => { customFetch(`/users/${id}/follow`, { headers:{method: 'DELETE'}})}
