package main

import (
  "net/http"
)



func main() {



  // insertBook()
  // selectBook()

	http.HandleFunc("/", parseGhPost)
  http.HandleFunc("/test",test)
  http.HandleFunc("/api/insert", postInsertBook)
  http.HandleFunc("/api/select", postSelectBook)
  http.HandleFunc("/api/delete", postDeleteBook)
	http.ListenAndServe(":8080", nil)

}
