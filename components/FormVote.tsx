import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import {checkDomain} from "./domaisList";
import {CountrySelector} from "./Selectores";
import {countryList, Short, teamList} from "./Country";
import {VoteProps} from "./voteProps";
import {IMatche} from "../model/Matche";
import Flag from "react-flagkit";
let State = {
    email: "",
    country: "",
    support: ""
}


export const GlobelVoteForm: FC<VoteProps> = ({changeStatus}) => {
    const [from, setFrom] = useState(State);
    const [mesErro,setMesErro]=useState('')
    const handlerChage = (e: ChangeEvent<HTMLInputElement>) => {
        setFrom({...from, [e.target.name]: e.target.value})
    }
    const handleSelectChange = (name: string, value: string): void => {
        console.log(value)
        setFrom({...from, [name]: value})
        console.log(from)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       if(from.country===undefined||from.country===''){setMesErro('please select your country') ;return}
       if(from.support===undefined||from.support===''){setMesErro('please select which team you support') ;return}
        if (!checkDomain(from.email))
        { console.log('errore')
            setMesErro('we not accept this domain')
            return;
        }
        if(!changeStatus)
            return;
        changeStatus('wait')
        fetch('/api/GlobalVoteSubmit', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(from)

        }).then(res => {
            return res.json()
        }).then(data => {
            let mes = data.message

            if (mes == 'success')
                changeStatus('success')
            else if (mes === 'email exist')
                changeStatus('exist')
            else
                changeStatus('error')


        })
            .catch(e => {
                console.log(e)
            })


    }

    return (<div className="w-full p-2 scroll-mr-0">
        <p className="text-center font-sans font-black text-[30px] p-2">Support your team</p>
        <p className="text-center font-sans p-2 ">support your team in world cup 2022 <br/>
            vote for team who you gas will be win in Qutar 2022
        </p>
        <form className="flex-row p-0 md:px-14 px-0 space-y-2 " onSubmit={handleSubmit}>
            <p className="text-center text-red-600 py-2">{mesErro }</p>
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4 ">
                <label className="font-sans col-span-1 font-semibold  ">Country :</label>

                <CountrySelector handleChangeP={handleSelectChange} name="country" country={countryList}
                                 className="col-span-3 appearance-none"/>
            </div>
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4">
                <label className="font-sans font-semibold ">Email :</label>
                <input className="p-1 border outline-0 focus:ring-1 focus:ring-blue-400 col-span-3" name="email"
                       onChange={handlerChage} required
                       value={from.email} type="email"/>
            </div>
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4">
                <label className="font-sans font-semibold">Support :</label>
                <CountrySelector handleChangeP={handleSelectChange} name="support" country={teamList}
                                 className="col-span-3 appearance-none"/>


            </div>
            <div className='flex justify-center pt-4'>
                <button
                    className='bg-black text-white font-normal p-2 px-10 hover:bg-gray-900 justify-self-center'>Vote
                </button>
            </div>

        </form>
    </div>)
}

interface MatchVoteFormProps extends VoteProps{
    match:IMatche
}
export const MatchVoteForm: FC<MatchVoteFormProps> = ({changeStatus,match}) => {
    const [from, setFrom] = useState({
        email: "",
        country: "",
        support: 0,
        idMatch:match._id!.toString()
    });
    const [mesErro,setMesErro]=useState('')
    const handlerChage = (e: ChangeEvent<HTMLInputElement>) => {
        setFrom({...from, [e.target.name]: e.target.value})
    }
    const handleSelectChange = (name: string, value: string): void => {
        console.log(value)
        setFrom({...from, [name]: value})
        console.log(from)
    }
   const handleChangeSupport=(s:number)=>{setFrom({...from, support:s})}
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(from.country===undefined||from.country===''){setMesErro('please select your country') ;return}
        if(from.support===undefined||from.support===0){setMesErro('please choice one Team') ;return}
        if (!checkDomain(from.email))
        { console.log('errore')
            setMesErro('we not accept this domain')
            return;
        }
        if(!changeStatus)
            return;
        changeStatus('wait')
        fetch('/api/matchVoteSubmit', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(from)

        }).then(res => {
            return res.json()
        }).then(data => {
            let mes = data.message

            if (mes == 'success')
                changeStatus('success')
            else if (mes === 'email exist')
                changeStatus('exist')
            else
                changeStatus('error')
        })
            .catch(e => {
                console.log(e)
            })
    }
    const isactive=(s:number)=>{return s==from.support? "bg-green-500 hover:bg-green-500border-gray-400 ":"hover:bg-gray-100 border-gray-400"}
    return (<div className="w-full p-2 scroll-mr-0">
        <p className="text-center font-sans font-black text-[30px] p-2">Support your team</p>
        <p className="text-center font-sans p-2 ">support your team in world cup 2022 <br/>
            vote for team who you gas will be win in Qutar 2022
        </p>
        <form className="flex-row p-0 md:px-14 px-0 space-y-2 " onSubmit={handleSubmit}>
            <p className="text-center text-red-600 py-2">{mesErro }</p>
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4 ">
                <label className="font-sans col-span-1 font-semibold  ">Country :</label>

                <CountrySelector handleChangeP={handleSelectChange} name="country" country={countryList}
                                 className="col-span-3 appearance-none"/>
            </div>
            <div className="grid grid-cols-4 items-center w-full justify-center space-x-4">
                <label className="font-sans font-semibold ">Email :</label>
                <input className="p-1 border outline-0 focus:ring-1 focus:ring-blue-400 col-span-3" name="email"
                       onChange={handlerChage} required
                       value={from.email} type="email"/>
            </div>
            <div className="flex p-4 items-center w-full justify-center space-x-4">
                <button onClick={()=>{handleChangeSupport(1)}} type="button"
                    className={'border  rounded font-normal flex justify-center items-center space-x-2 ' +
                        'p-2 px-8 justify-self-center '+isactive(1)}>
                    <Flag country={Short[match.team1.replace(" ", "_")]}>
                    </Flag>
                    <p>{match.team1}</p>
                </button>
                <button onClick={()=>{handleChangeSupport(2)}} type="button"
                    className={'border  rounded font-normal flex justify-center items-center space-x-2 ' +
                        'p-2 px-8 justify-self-center '+isactive(2)}>
                    <Flag country={Short[match.team2.replace(" ", "_")]}>
                    </Flag>
                    <p>{match.team2}</p>
                </button>
            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-black text-white font-normal p-2 px-10 hover:bg-gray-900 justify-self-center'>Vote
                </button>
            </div>

        </form>
    </div>)
}