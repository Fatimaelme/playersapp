import React, { useState } from 'react'

const Players = () => {
    const [info, setInfo] = useState([
        {name: 'Achraf Hakimi', team: 'PSG', nationality: 'Moroccan', jerseynumber: 2, img: 'https://www.moroccoworldnews.com/wp-content/uploads/2023/02/achraf-hakimi-i-want-to-win-titles-with-morocco-800x450.png' },
        {name: 'Lionel Messi', team: 'Inter Miami', nationality: 'Argentine', jerseynumber: 10, img: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'},
        {name: 'venesius junior', team: 'Real Madrid', nationality: 'Bresilian', jerseynumber: 7, img: 'https://assets-cms.thescore.com/uploads/image/file/530475/w640xh480_GettyImages-1420577593.jpg?ts=1662392079'},
        {name: 'Luka Modrić', team: 'Real Madrid', nationality: 'Croatian', jerseynumber: 10, img: 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1447340188-850x560.jpeg'},
        {name: 'Erling Haaland', team: 'Manchester City', nationality: 'British', jerseynumber: 9, img: 'https://www.lifeinnorway.net/wp-content/uploads/2020/01/erling-braut-haaland-salzburg.jpg'}
    ])

    const [name, setName] = useState('')
    const [team,setTeam] = useState('')
    const [nationality, setNationality] = useState('')
    const [jerseynumber, setJerseynumber] = useState()
    const [img, setImg] = useState('')

    const ajout = () =>{
        setInfo([
            ...info, {name: name, team: team, nationality: nationality, jerseynumber: jerseynumber, img:img}
        ])
      
        setName('')
        setTeam('')
        setJerseynumber('')
        setNationality('')
        setImg('')
    }
  return (
    <div className='flex flex-row p-10'>
    <div className='flex flex-[0.3] flex-col'>
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">name</span>
  </label>
  <input type="text" value={name} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={event=>setName(event.target.value)}/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Team</span>
  </label>
  <input type="text" value={team} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={event=>setTeam(event.target.value)}/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Nationality</span>
  </label>
  <input type="text" value={nationality} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={event=>setNationality(event.target.value)}/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">JerseyNumber</span>
  </label>
  <input type="number" value={jerseynumber} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={event=>setJerseynumber(event.target.value)}/>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <input type="text" value={img} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={event=>setImg(event.target.value)}/>
  <button className="btn mt-4 bg-red-700 text-gray-100 hover:bg-black" onClick={ajout}>Button</button>
</div>
</div>
    <div className='flex-[0.7] grid grid-cols-3 gap-5'>
      {info.map(e=><div className="card card-side bg-base-100 shadow-xl">
    <figure><img src={e.img} alt="Image" className='h-64 w-64'/></figure>
    <div className="card-body">
      <h2 className="card-title"></h2>
      <p className='text-3xl font-bold uppercase'> {e.name} </p>
      <p className='text-lg text-orange-800 font-bold'> {e.team} </p>
      <p className='font-bold text-lg'> {e.nationality} </p>
      <p className='font-black text-blue-900'> {e.jerseynumber} </p>
    </div>
  </div>)}
    </div>
    </div>
   
  )
}

export default Players