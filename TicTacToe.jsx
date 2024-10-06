import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Xicon from '../newapp/tic-tac-toe-images/close.png'
import Oicon from '../newapp/tic-tac-toe-images/o.png'

const initialBoard = [
  {
    id:0,
    value:null,
    disabled:false
  },
  {
    id:1,
    value:null,
    disabled:false

  },
  {
    id:2,
    value:null,
    disabled:false
  },
  {
    id:3,
    value:null,
    disabled:false
  },
  {
    id:4,
    value:null,
    disabled:false
  },
  {
    id:5,
    value:null,
    disabled:false
  },
  {
    id:6,
    value:null,
    disabled:false
  },
  {
    id:7,
    value:null,
    disabled:false
  },
  {
    id:8,
    value:null,
    disabled:false
  }
]

const answers = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]

const Item = ({item,onPress})=>{
  const [pressed, setpressed] = useState(false)

  return(
    // <TouchableOpacity onPress={()=>{item.value = turn;setpressed(true);setTurn(!turn)}} disabled={pressed}>
    <TouchableOpacity onPress={onPress} disabled={item.disabled}>
    <View style={{backgroundColor:"#43115B",width:100, height:100,marginBottom:10,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center"}}>
      {/* {state && state == 0 ? (<Image style={{width:50,height:50,}} source={Oicon}/>):
      state && state == 1?(<Image style={{width:50,height:50,}} source={Xicon}/>):null} */}
      {item.value == true?(<Image style={{width:50,height:50,}} source={Xicon}/>):item.value == false?(<Image style={{width:50,height:50,}} source={Oicon}/>):null}
    </View>
    </TouchableOpacity>
  )
}


export default function TicTacToe() {
  const [turn, setTurn] = useState(false)
  const [board, setBoard] = useState(initialBoard);
  const [winner, setwinner] = useState(null)

  //false->O true->X

  const winningLogic = (board)=>{
    const Xarray = board.filter((item)=>item.value == true).map((item)=>item.id)
    const Oarray = board.filter((item)=>item.value == false).map((item)=>item.id)
    // console.log(Xarray)
    // console.log(Oarray)
    const Xwins = answers.some((combination)=>combination.every((index)=>Xarray.includes(index)))
    const OWins = answers.some((combination) => combination.every((index) => Oarray.includes(index)));

    if(Xwins){
      setwinner('X')
      setBoard(board.map(item => ({ ...item, disabled: true })));

    }
    else if(OWins){
      setwinner('O')
      setBoard(board.map(item => ({ ...item, disabled: true })));

    }
    else if (board.every((item) => item.value !== null)) {
    // Declare a draw if the board is full and no one has won
    setwinner('No one');
    setBoard(board.map(item => ({ ...item, disabled: true }))); // Disable the board
  }
    
  }

  const handlePress = (id)=>{
    const newBoard = board.map((item)=>{
      if(item.id == id && !item.disabled){
        item.value = turn
        item.disabled = true
      }
      return {...item}

    })

    console.log(newBoard)
    setBoard(newBoard)
    winningLogic(newBoard)
    setTurn(!turn)
  }

  const handleReset = ()=>{
    const resetBoard = initialBoard.map(item => ({
      ...item,
      value: null,   // Reset value to null
      disabled: false // Enable the touchable again
    }));
    
    setBoard(resetBoard);
    setTurn(false)
    setwinner(null)
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#5A1E76",flexDirection:"column",alignItems:"center",padding:30,gap:20}}>
      <Text style={{color:"white",fontSize:30,fontWeight:"bold"}}>TicTacToe</Text>
      <View style={{width:"90%"}}>
        <Text style={{backgroundColor:"#48D2FE",paddingVertical:20,borderRadius:7,fontSize:20,color:"black",fontWeight:"600",textAlign:"center"}}>{winner?(`${winner} wins`):turn?"Player X's Turn":"Player O's Turn"}</Text>
      </View>
      <FlatList 
      style={{marginTop:40,maxHeight:350}}
        numColumns={3}
        columnWrapperStyle={{gap:10}}
        data={board}
        renderItem={({item})=><Item item = {item} onPress={()=>handlePress(item.id)}/>}
        keyExtractor={item=>item.id}
      />
      <TouchableOpacity onPress={handleReset}>
        <Text style={{color:"black",fontSize:20,fontWeight:"bold",backgroundColor:"white",padding:20,borderRadius:7,paddingHorizontal:80}}>Reset</Text>

      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})