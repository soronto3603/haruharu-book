package main

import (
	"encoding/json"
	"fmt"
	"net/http"
  // "log"
)

//DB account-info
var user = "root"
var password = "2262552a"
var host = "127.0.0.1:3306"
var dbname = "haruharu"
//DB account-info
func test(rw http.ResponseWriter, request *http.Request) {
  fmt.Fprintf(rw,"test")
}

func parseGhPost(rw http.ResponseWriter, request *http.Request) {
  type test_struct struct {
  	Test string
  }
	decoder := json.NewDecoder(request.Body)

	var t test_struct
	err := decoder.Decode(&t)

	if err != nil {
		panic(err)
	}

	fmt.Println(t.Test)
  fmt.Fprintf(rw,t.Test)
}

func postInsertBook(rw http.ResponseWriter, request *http.Request) {
  decoder := json.NewDecoder(request.Body)

  var t user_book
  err := decoder.Decode(&t)

  if err != nil{
    panic(err)
  }
	insertBook(t.UserId,t.Title,t.Link,t.Image,t.Author,t.Price,t.Discount,t.Publisher,t.Isbn,t.Description)
  fmt.Println("INSERT : %d %d %s %s %s %s %s %s %s %s %s",t.No,t.UserId,t.Title,t.Link,t.Image,t.Author,t.Price,t.Discount,t.Publisher,t.Isbn,t.Description)
	fmt.Fprintf(rw,"INSERT COMPLETE")
}

func postSelectBook(rw http.ResponseWriter, request *http.Request) {
	result := selectBook()
	fmt.Fprintf(rw,result)
}

func postDeleteBook(rw http.ResponseWriter, request *http.Request){
	type no struct{
		No int
	}
	decoder := json.NewDecoder(request.Body)

	var t no
	err := decoder.Decode(&t)

	if err!=nil{
		panic(err)
	}

	deleteBook(t.No)
	fmt.Fprintf(rw,"DELETE COMPLETE")
}
