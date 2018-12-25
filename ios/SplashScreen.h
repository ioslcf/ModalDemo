//
//  SplashScreen.h
//  ModalDemo
//
//  Created by chengfei on 2018/12/25.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

NS_ASSUME_NONNULL_BEGIN

@interface SplashScreen : NSObject<RCTBridgeModule>

+ (void)show;

@end

NS_ASSUME_NONNULL_END
