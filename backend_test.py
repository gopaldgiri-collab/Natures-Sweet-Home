#!/usr/bin/env python3
"""
Backend API Tests for Nature's Sweet Homes
Tests the inquiries API endpoints
"""

import requests
import json
import re
from datetime import datetime

# Base URL from .env
BASE_URL = "https://luxury-villa-escapes-3.preview.emergentagent.com/api"

def is_valid_uuid(uuid_string):
    """Check if string is a valid UUID v4"""
    uuid_pattern = re.compile(r'^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', re.I)
    return bool(uuid_pattern.match(uuid_string))

def is_valid_iso_datetime(date_string):
    """Check if string is a valid ISO 8601 datetime"""
    try:
        datetime.fromisoformat(date_string.replace('Z', '+00:00'))
        return True
    except:
        return False

def test_health_endpoint():
    """Test 1: GET /api/health returns 200 with correct JSON"""
    print("\n" + "="*80)
    print("TEST 1: GET /api/health")
    print("="*80)
    
    try:
        response = requests.get(f"{BASE_URL}/health", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 200:
            print(f"❌ FAILED: Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        
        if data.get('ok') != True:
            print(f"❌ FAILED: Expected ok=true, got {data.get('ok')}")
            return False
        
        if data.get('service') != "Nature's Sweet Homes API":
            print(f"❌ FAILED: Expected service=\"Nature's Sweet Homes API\", got \"{data.get('service')}\"")
            return False
        
        print("✅ PASSED: Health endpoint working correctly")
        return True
        
    except Exception as e:
        print(f"❌ FAILED: Exception occurred: {str(e)}")
        return False

def test_post_inquiry_valid():
    """Test 2: POST /api/inquiries with valid data"""
    print("\n" + "="*80)
    print("TEST 2: POST /api/inquiries with valid data")
    print("="*80)
    
    payload = {
        "name": "Rohit Sharma",
        "phone": "+919999999999",
        "email": "r@x.com",
        "checkIn": "2025-08-01",
        "checkOut": "2025-08-03",
        "guests": "6",
        "villa": "Whispering Pines Villa",
        "message": "Test inquiry"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/inquiries", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 200:
            print(f"❌ FAILED: Expected status 200, got {response.status_code}")
            return False, None
        
        data = response.json()
        
        if data.get('success') != True:
            print(f"❌ FAILED: Expected success=true, got {data.get('success')}")
            return False, None
        
        inquiry = data.get('inquiry')
        if not inquiry:
            print(f"❌ FAILED: No inquiry object in response")
            return False, None
        
        # Check for _id field (should not be present)
        if '_id' in inquiry:
            print(f"❌ FAILED: _id field leaked in response")
            return False, None
        
        # Check id field is UUID
        inquiry_id = inquiry.get('id')
        if not inquiry_id:
            print(f"❌ FAILED: No id field in inquiry")
            return False, None
        
        if not is_valid_uuid(inquiry_id):
            print(f"❌ FAILED: id is not a valid UUID: {inquiry_id}")
            return False, None
        
        # Check status field
        if inquiry.get('status') != 'new':
            print(f"❌ FAILED: Expected status='new', got '{inquiry.get('status')}'")
            return False, None
        
        # Check createdAt field
        created_at = inquiry.get('createdAt')
        if not created_at:
            print(f"❌ FAILED: No createdAt field in inquiry")
            return False, None
        
        if not is_valid_iso_datetime(created_at):
            print(f"❌ FAILED: createdAt is not a valid ISO string: {created_at}")
            return False, None
        
        print(f"✅ PASSED: Valid inquiry created with id={inquiry_id}")
        return True, inquiry_id
        
    except Exception as e:
        print(f"❌ FAILED: Exception occurred: {str(e)}")
        return False, None

def test_post_inquiry_missing_name():
    """Test 3: POST /api/inquiries with missing name"""
    print("\n" + "="*80)
    print("TEST 3: POST /api/inquiries with missing name")
    print("="*80)
    
    payload = {
        "phone": "+919999999999",
        "email": "test@example.com"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/inquiries", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 400:
            print(f"❌ FAILED: Expected status 400, got {response.status_code}")
            return False
        
        data = response.json()
        
        if data.get('success') != False:
            print(f"❌ FAILED: Expected success=false, got {data.get('success')}")
            return False
        
        print("✅ PASSED: Missing name validation working")
        return True
        
    except Exception as e:
        print(f"❌ FAILED: Exception occurred: {str(e)}")
        return False

def test_post_inquiry_missing_phone():
    """Test 3b: POST /api/inquiries with missing phone"""
    print("\n" + "="*80)
    print("TEST 3b: POST /api/inquiries with missing phone")
    print("="*80)
    
    payload = {
        "name": "Test User",
        "email": "test@example.com"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/inquiries", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 400:
            print(f"❌ FAILED: Expected status 400, got {response.status_code}")
            return False
        
        data = response.json()
        
        if data.get('success') != False:
            print(f"❌ FAILED: Expected success=false, got {data.get('success')}")
            return False
        
        print("✅ PASSED: Missing phone validation working")
        return True
        
    except Exception as e:
        print(f"❌ FAILED: Exception occurred: {str(e)}")
        return False

def test_get_inquiries(expected_inquiry_id=None):
    """Test 4: GET /api/inquiries returns list"""
    print("\n" + "="*80)
    print("TEST 4: GET /api/inquiries")
    print("="*80)
    
    try:
        response = requests.get(f"{BASE_URL}/inquiries", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response length: {len(response.text)} chars")
        
        if response.status_code != 200:
            print(f"❌ FAILED: Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        
        if data.get('success') != True:
            print(f"❌ FAILED: Expected success=true, got {data.get('success')}")
            return False
        
        items = data.get('items')
        if items is None:
            print(f"❌ FAILED: No items array in response")
            return False
        
        if not isinstance(items, list):
            print(f"❌ FAILED: items is not an array")
            return False
        
        print(f"Found {len(items)} inquiries")
        
        # Check no _id field in any item
        for idx, item in enumerate(items):
            if '_id' in item:
                print(f"❌ FAILED: _id field leaked in item {idx}")
                return False
        
        # Check if items are sorted by createdAt desc
        if len(items) > 1:
            for i in range(len(items) - 1):
                current = items[i].get('createdAt', '')
                next_item = items[i + 1].get('createdAt', '')
                if current < next_item:
                    print(f"❌ FAILED: Items not sorted by createdAt desc")
                    return False
        
        # Check if expected inquiry is present
        if expected_inquiry_id:
            found = False
            for item in items:
                if item.get('id') == expected_inquiry_id:
                    found = True
                    print(f"✅ Found expected inquiry with id={expected_inquiry_id}")
                    break
            
            if not found:
                print(f"❌ FAILED: Expected inquiry with id={expected_inquiry_id} not found in list")
                return False
        
        print("✅ PASSED: GET /api/inquiries working correctly")
        return True
        
    except Exception as e:
        print(f"❌ FAILED: Exception occurred: {str(e)}")
        return False

def test_options_endpoint():
    """Test 5: OPTIONS /api/inquiries returns 204 with CORS headers"""
    print("\n" + "="*80)
    print("TEST 5: OPTIONS /api/inquiries")
    print("="*80)
    
    try:
        response = requests.options(f"{BASE_URL}/inquiries", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Headers: {dict(response.headers)}")
        
        if response.status_code != 204:
            print(f"❌ FAILED: Expected status 204, got {response.status_code}")
            return False
        
        # Check for Access-Control-Allow-Origin header
        if 'Access-Control-Allow-Origin' not in response.headers:
            print(f"❌ FAILED: Access-Control-Allow-Origin header not present")
            return False
        
        print(f"Access-Control-Allow-Origin: {response.headers['Access-Control-Allow-Origin']}")
        print("✅ PASSED: OPTIONS endpoint working correctly")
        return True
        
    except Exception as e:
        print(f"❌ FAILED: Exception occurred: {str(e)}")
        return False

def main():
    """Run all tests"""
    print("\n" + "="*80)
    print("BACKEND API TESTS - Nature's Sweet Homes")
    print(f"Base URL: {BASE_URL}")
    print("="*80)
    
    results = []
    
    # Test 1: Health endpoint
    results.append(("Health endpoint", test_health_endpoint()))
    
    # Test 2: POST valid inquiry
    success, inquiry_id = test_post_inquiry_valid()
    results.append(("POST valid inquiry", success))
    
    # Test 3: POST missing name
    results.append(("POST missing name", test_post_inquiry_missing_name()))
    
    # Test 3b: POST missing phone
    results.append(("POST missing phone", test_post_inquiry_missing_phone()))
    
    # Test 4: GET inquiries
    results.append(("GET inquiries", test_get_inquiries(inquiry_id)))
    
    # Test 5: OPTIONS endpoint
    results.append(("OPTIONS endpoint", test_options_endpoint()))
    
    # Summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{status}: {test_name}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    
    if passed == total:
        print("\n🎉 ALL TESTS PASSED!")
        return 0
    else:
        print(f"\n⚠️  {total - passed} test(s) failed")
        return 1

if __name__ == "__main__":
    exit(main())
