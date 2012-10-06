/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"iUk6xaaLm5naFnT8CnYZ7kp9MgTf6ZmG"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"fI42CkVp8cV8MNrUzUhDp5dFewNpLIPb"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"EmvBFBzfdLILRKqjOCcP9EUc9p2E79fQ"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"V79b9oxcIDHtTrSmWX6UVunvmsOTcP8e"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"kbUEYzzm9pd8NbBGG8VTNshfnRg79Sfg"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"ZIlWllKgmtvleaBPIdL3uUVnAvYaRUG1"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
