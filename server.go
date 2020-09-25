package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("client/build")))
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	fmt.Println("Listening on port", port, "...")
	fmt.Println("MODDED")
	http.ListenAndServe(fmt.Sprintf(":%s", port), nil)
}
