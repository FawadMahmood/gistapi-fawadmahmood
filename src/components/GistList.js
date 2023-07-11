import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchGists } from '.././stores/gists';
import Gist from './Gist';

const GistList = () => {
  const dispatch = useDispatch();
  const gists = useSelector((state) => state.gists.gists);
  const isLoading = useSelector((state) => state.gists.isLoading);
  const error = useSelector((state) => state.gists.error);
  
  useEffect(() => {
    // Dispatch the fetchUsers action
    dispatch(fetchGists());
  }, [dispatch]);

  if(isLoading){
    return <h1>loading</h1>
  }

  if(!isLoading && gists.length === 0){
    return <p>no records found.</p>
  }

  if(error){
    return <p>error has been occured.</p>
  }
  
  return(
    <div>
      {gists.map(
        ({
          updated_at,
          owner: { avatar_url, login },
          comments_url,
          forks_url,
          files,
          description,
          created_at,
          id
        }) => (
          <Gist
            key={id}
            owner={{ avatar_url, login }}
            files={files}
            forks_url={forks_url}
            comments_url={comments_url}
            createdAt={created_at}
            updatedAt={updated_at}
            description={description}
          />
        )
      )}
    </div>
  )
}

export default GistList
