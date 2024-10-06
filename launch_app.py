import subprocess
import webbrowser
import time
import os

# Step 1: Start Node.js Server (Ensure 'server.js' is running locally)
def start_node_server():
    # Use subprocess to launch the Node.js server in the background
    node_process = subprocess.Popen(["node", "server.js"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return node_process

# Step 2: Open Web App in Browser
def open_webapp():
    # Open the app in the browser (adjust if using localhost or deployed URL)
    url = "http://localhost:3000"
    webbrowser.open(url)

if __name__ == "__main__":
    # Step 1: Start Node.js server
    print("Starting Node.js server...")
    node_process = start_node_server()

    # Give the server a moment to start
    time.sleep(3)

    # Step 2: Open the web app in the default browser
    print("Opening the web app in the browser...")
    open_webapp()

    try:
        # Keep the Python script running while Node.js server is live
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        # If the script is stopped, terminate the Node.js process
        print("Shutting down Node.js server...")
        node_process.terminate()
