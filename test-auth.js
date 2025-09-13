// Simple test script to verify authentication
const fetch = require('node-fetch');

async function testAuth() {
  console.log('Testing authentication flow...');
  
  try {
    // Test login
    const loginResponse = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'admin',
        password: 'A123456@'
      })
    });
    
    const loginData = await loginResponse.json();
    console.log('Login response:', loginData);
    console.log('Login status:', loginResponse.status);
    
    if (loginResponse.ok) {
      console.log('✅ Login successful!');
    } else {
      console.log('❌ Login failed:', loginData.error);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testAuth();
