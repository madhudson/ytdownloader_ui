import React, { useState } from 'react';

export const Download = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [alerter, setAlerter] = useState({active: false});

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDownload = () => {
    setLoading(true);
    const url = 'https://ytdownloader.jibbajabba.repl.co/download';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name,
        url
      })
    })
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setAlerter({
        error: false,
        active: true,
        msg: JSON.stringify(data)
      })
    }).catch((e) => {
      setLoading(false);
      setAlerter({
        active: true,
        msg: JSON.stringify(e),
        error: true
      })
    })
    // try {
    //   const response = await fetch(url, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     headers: {
    //       'Content-Type': 'application/json'
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: JSON.stringify({url, name})
    //   })
    //   const jdata = await response.json();
    //   setLoading(false);
    //   if(jdata.error) {
    //     setAlerter({
    //       error: true,
    //       msg: jdata.error
    //     });
    //   }else {
    //     setAlerter({
    //       error: false,
    //       msg: 'download complete'
    //     })
    //   }
    // }catch(error) {
    //   setAlerter({
    //     error: true,
    //     msg: error
    //   });
    //   return;
    // }
    
  }

  const handleClearAlerter = () => {
    setAlerter({active: false});
  }

  const renderAlerter = () => {
    if(alerter.active) {
      if(alerter.error) {
        return (
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>oh no!</strong> {alerter.msg}
            <button onClick={handleClearAlerter} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )
      }
      return (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>all done!</strong> {alerter.msg}
            <button onClick={handleClearAlerter} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      )
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(url === "" || name === "") {
      return;
    }
    await handleDownload();
    setUrl("");
    setName("");
  }

  const isLoading = () => {
    if(loading) {
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )
    }
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">URL</label>
          <input onChange={handleUrlChange} className="form-control" id="url" aria-describedby="urlHelp"></input>
          <div id="urlHelp" className="form-text">include scheme.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input onChange={handleNameChange} className="form-control" id="name"></input>
        </div>
        
        <button onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
      </form>
    )
  }

  return (
    <div>
      {renderAlerter()}
      {isLoading()}
    </div>
  )
}

export default Download;