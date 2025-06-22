import os
from dotenv import load_dotenv

# Test loading .env file
print("Testing .env file loading...")
print(f"Current working directory: {os.getcwd()}")
print(f"Script directory: {os.path.dirname(__file__)}")

env_path = os.path.join(os.path.dirname(__file__), '.env')
print(f"Looking for .env file at: {env_path}")
print(f".env file exists: {os.path.exists(env_path)}")

if os.path.exists(env_path):
    print(f".env file size: {os.path.getsize(env_path)} bytes")
    
    # Try to read the file manually
    try:
        with open(env_path, 'r') as f:
            content = f.read()
            print(f"File content length: {len(content)} characters")
            print("First few lines:")
            for i, line in enumerate(content.split('\n')[:5]):
                print(f"  Line {i+1}: {repr(line)}")
    except Exception as e:
        print(f"Error reading file: {e}")

# Load environment variables
result = load_dotenv(dotenv_path=env_path)
print(f"load_dotenv() result: {result}")

# Check if variables are loaded
print(f"SUPABASE_URL: {repr(os.getenv('SUPABASE_URL'))}")
print(f"SUPABASE_KEY: {repr(os.getenv('SUPABASE_KEY'))}")
print(f"SECRET_KEY: {repr(os.getenv('SECRET_KEY'))}")
