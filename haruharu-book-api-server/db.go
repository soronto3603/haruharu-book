package main

import (
  "database/sql"
  _ "github.com/go-sql-driver/mysql"
  "log"
  "fmt"
  "encoding/json"
)

type user_book struct{
  No int
  UserId int
  Title string
  Link string
  Image string
  Author string
  Price string
  Discount string
  Publisher string
  Isbn string
  Description string
}

func insertBook(user_id int,title string,link string,image string,author string,price string,discount string,publisher string,isbn string,description string){
  db, err := sql.Open("mysql", user+":"+password+"@tcp("+host+")/"+dbname)
  if err != nil {
      log.Fatal(err)
  }
  defer db.Close()

  // db.Exec("INSERT INTO user_book VALUES(NULL,1,'123','123','123','123','123','123','123','123','123')")
  db.Exec("INSERT INTO user_book VALUES(NULL,?,?,?,?,?,?,?,?,?,?)",user_id,title,link,image,author,price,discount,publisher,isbn,description)
}
func selectBook() string {
  db, err := sql.Open("mysql", user+":"+password+"@tcp("+host+")/"+dbname)
  if err != nil {
      log.Fatal(err)
  }
  defer db.Close()

  var no,user_id int
  var title,link,image,author,price,discount,publisher,isbn,description string
  rows, err := db.Query("SELECT * FROM user_book")
  if err != nil {
      log.Fatal(err)
  }
  defer rows.Close() //반드시 닫는다 (지연하여 닫기)

  var result_slice []user_book


  for rows.Next() {
      err := rows.Scan(&no,&user_id,&title,&link,&image,&author,&price,&discount,&publisher,&isbn,&description)
      if err != nil {
          log.Fatal(err)
      }
      result_slice = append(result_slice,user_book{no,user_id,title,link,image,author,price,discount,publisher,isbn,description})

      fmt.Println(no,user_id,title,link,image,author,price,discount,publisher,isbn,description)
  }
  jsonBytes, err := json.Marshal(result_slice)
  if err != nil{
    panic(err)
  }

  jsonString := string(jsonBytes)
  return jsonString
}

func deleteBook(no int) {
  db, err := sql.Open("mysql", user+":"+password+"@tcp("+host+")/"+dbname)
  if err != nil {
      log.Fatal(err)
  }
  defer db.Close()

  db.Exec("DELETE FROM user_book where no=?",no)
}
